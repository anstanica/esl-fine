import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "Lessons";
    readonly columns: readonly [
      {
        readonly name: "Name";
        readonly type: "string";
      },
      {
        readonly name: "urls";
        readonly type: "link";
        readonly link: {
          readonly table: "Lessons";
        };
      }
    ];
  }
];
export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;
export type Lessons = InferredTypes["Lessons"];
export type LessonsRecord = Lessons & XataRecord;
export type DatabaseSchema = {
  Lessons: LessonsRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
