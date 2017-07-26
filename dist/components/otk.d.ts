import * as stats from "./stats";
import { TmType } from "./meltingpoint";
export declare var DEFAULT_SAMPLE_SIZE: number;
export { TmType } from "./meltingpoint";
export declare class otk {
    private _sequence;
    private _stats;
    private _method;
    private _domain_size;
    private _sample_size;
    private _sample_process_time;
    private _tm_type;
    constructor(sequence: string, sample_size?: number, tm_type?: TmType);
    private populate_stats(sample_size?);
    size(): number;
    time(): number;
    method(): string;
    sequence(sequence: string | null): string;
    stat_gc(): stats.Statistics;
    stat_tm(): stats.Statistics;
    reverse_complement(): string;
}
