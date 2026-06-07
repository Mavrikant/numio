/** RAID array capacity, redundancy and fault-tolerance calculations. */

export type RaidLevel = "0" | "1" | "5" | "6" | "10";

export interface RaidInput {
  readonly level: RaidLevel;
  readonly disks: number;
  /** Size of each (identical) disk, in TB. */
  readonly sizeTB: number;
}

export interface RaidResult {
  /** Usable capacity, in TB. */
  readonly usableTB: number;
  /** Capacity lost to redundancy, in TB. */
  readonly redundancyTB: number;
  /** Number of simultaneous disk failures the array can tolerate. */
  readonly faultTolerance: number;
  /** Storage efficiency as a percentage (usable / raw). */
  readonly efficiencyPct: number;
}

/** Compute usable capacity, redundancy and fault tolerance for a RAID array. Throws on invalid disk counts. */
export function raidCapacity({ level, disks, sizeTB }: RaidInput): RaidResult {
  if (!Number.isInteger(disks) || disks < 1) throw new Error("Disk count must be a positive integer");
  if (!(sizeTB > 0)) throw new Error("Disk size must be greater than zero");

  let usableTB: number;
  let faultTolerance: number;

  switch (level) {
    case "0":
      if (disks < 1) throw new Error("RAID 0 requires at least 1 disk");
      usableTB = disks * sizeTB;
      faultTolerance = 0;
      break;
    case "1":
      if (disks < 2) throw new Error("RAID 1 requires at least 2 disks");
      usableTB = sizeTB;
      faultTolerance = disks - 1;
      break;
    case "5":
      if (disks < 3) throw new Error("RAID 5 requires at least 3 disks");
      usableTB = (disks - 1) * sizeTB;
      faultTolerance = 1;
      break;
    case "6":
      if (disks < 4) throw new Error("RAID 6 requires at least 4 disks");
      usableTB = (disks - 2) * sizeTB;
      faultTolerance = 2;
      break;
    case "10":
      if (disks < 4 || disks % 2 !== 0) throw new Error("RAID 10 requires an even number of disks (at least 4)");
      usableTB = (disks / 2) * sizeTB;
      faultTolerance = 1; // guaranteed; can be higher depending on which disks fail
      break;
    default:
      throw new Error("Unknown RAID level");
  }

  const rawTB = disks * sizeTB;
  const redundancyTB = rawTB - usableTB;
  const efficiencyPct = (usableTB / rawTB) * 100;

  return { usableTB, redundancyTB, faultTolerance, efficiencyPct };
}
