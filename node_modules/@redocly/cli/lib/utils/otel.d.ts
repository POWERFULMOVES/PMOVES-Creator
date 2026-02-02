import type { CloudEvents } from '@redocly/cli-otel';
export declare class OtelServerTelemetry {
    private nodeTracerProvider;
    constructor();
    send(cloudEvent: CloudEvents.Messages): void;
}
export declare const otelTelemetry: OtelServerTelemetry;
//# sourceMappingURL=otel.d.ts.map