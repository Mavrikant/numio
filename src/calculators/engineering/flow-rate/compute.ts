import { z } from "zod";
import {
  frictionFactorSwameeJain,
  frictionFactorLaminar,
  calculateReynoldsNumber,
  calculateFlowRate,
  calculateVelocity,
  calculateHeadLoss,
  classifyFlowRegime,
  PIPE_ROUGHNESS_MM,
} from "../_helpers/structures";

export const inputSchema = z.object({
  flowRateM3h: z.number().positive().max(100000),
  diameterMm: z.number().positive().max(5000),
  pipeLength: z.number().nonnegative(),
  pipeType: z.enum(["smooth_pvc", "commercial_steel", "galvanized_iron", "concrete"]),
  fluidType: z.enum(["water", "oil"]).default("water"),
});

export type FlowRateInputs = z.infer<typeof inputSchema>;

export interface FlowRateResult extends Record<string, unknown> {
  readonly velocityMs: number;
  readonly flowRateM3s: number;
  readonly flowRateLs: number;
  readonly reynoldsNumber: number;
  readonly flowRegime: string;
  readonly frictionFactor: number;
  readonly headLossM: number;
  readonly headLossPa: number;
}

// Kinematic viscosity (m²/s) at 20°C
const KINEMATIC_VISCOSITY = {
  water: 1.0e-6,
  oil: 2.0e-5,
};

export function compute(inputs: FlowRateInputs): FlowRateResult {
  // Convert from m³/h to m³/s
  const flowRateM3s = inputs.flowRateM3h / 3600;
  // Convert from mm to m
  const diameterM = inputs.diameterMm / 1000;

  // Calculate velocity from flow rate and diameter
  const velocityMs = calculateVelocity(flowRateM3s, diameterM);

  // Calculate Reynolds number
  const nu = KINEMATIC_VISCOSITY[inputs.fluidType];
  const reynoldsNumber = calculateReynoldsNumber(velocityMs, diameterM, nu);

  // Determine flow regime and calculate friction factor
  const flowRegime = classifyFlowRegime(reynoldsNumber);
  let frictionFactor = 0.02; // default assumption
  if (flowRegime === "laminar") {
    frictionFactor = frictionFactorLaminar(reynoldsNumber);
  } else if (flowRegime === "turbulent") {
    // Use Swamee-Jain for turbulent flow
    const absoluteRoughness = PIPE_ROUGHNESS_MM[inputs.pipeType];
    const relativeRoughness = absoluteRoughness / inputs.diameterMm;
    frictionFactor = frictionFactorSwameeJain(relativeRoughness, reynoldsNumber);
  } else {
    // Transition: use Swamee-Jain as compromise
    const absoluteRoughness = PIPE_ROUGHNESS_MM[inputs.pipeType];
    const relativeRoughness = absoluteRoughness / inputs.diameterMm;
    frictionFactor = frictionFactorSwameeJain(relativeRoughness, reynoldsNumber);
  }

  // Calculate head loss (Darcy-Weisbach)
  let headLossM = 0;
  if (inputs.pipeLength > 0) {
    headLossM = calculateHeadLoss(frictionFactor, inputs.pipeLength, diameterM, velocityMs);
  }

  // Pressure head loss: ΔP = ρ × g × hf
  const density = inputs.fluidType === "water" ? 1000 : 850; // kg/m³
  const g = 9.81;
  const headLossPa = density * g * headLossM;

  // Convert flow rate to L/s
  const flowRateLs = flowRateM3s * 1000;

  return {
    velocityMs: Math.round(velocityMs * 1000) / 1000,
    flowRateM3s: Math.round(flowRateM3s * 1000000) / 1000000,
    flowRateLs: Math.round(flowRateLs * 100) / 100,
    reynoldsNumber: Math.round(reynoldsNumber),
    flowRegime,
    frictionFactor: Math.round(frictionFactor * 10000) / 10000,
    headLossM: Math.round(headLossM * 1000) / 1000,
    headLossPa: Math.round(headLossPa),
  };
}
