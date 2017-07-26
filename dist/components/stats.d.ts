import * as meltingpoint from "./meltingpoint";
export interface Stats {
    gc: Statistics;
    tm: Statistics;
}
export interface Statistics {
    deviation?: number;
    mean?: number;
    median?: number;
    ext?: {
        min: number;
        max: number;
    };
    count: number;
    exact?: number;
}
export declare function all_sequences(sequence: string): IterableIterator<string>;
export declare function random_sequences(sequence: string, sample_size: number): IterableIterator<string>;
export declare function get_stats(generator: IterableIterator<string>, tmtype: meltingpoint.TmType): Stats;
export declare function expanded_size(sequence: string): number;
