import type { BeamDeflectionResult } from "./compute";

interface BeamDeflectionVizProps {
  readonly result: BeamDeflectionResult;
}

export default function BeamDeflectionViz({ result }: BeamDeflectionVizProps) {
  const deflection = result.maxDeflection;
  const moment = result.maxBendingMoment;

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Primary stat: max deflection */}
      <div className="flex flex-col items-center text-center">
        <div className="text-5xl font-bold text-blue-600">
          {deflection.toFixed(3)}
        </div>
        <div className="text-sm text-slate-500 mt-1">mm max deflection</div>
      </div>

      {/* Secondary stat: max bending moment */}
      <div className="flex flex-col items-center text-center border-t pt-4">
        <div className="text-3xl font-semibold text-slate-700">
          {(moment / 1000).toFixed(2)}
        </div>
        <div className="text-sm text-slate-500 mt-1">kN·m max bending moment</div>
      </div>

      <p className="text-xs text-slate-400 text-center max-w-xs mx-auto">
        Results are based on Euler-Bernoulli beam theory assuming linearly elastic, prismatic beams with small deflections.
      </p>
    </div>
  );
}
