import { IntrospectionResult, IntrospectedResource, FetchType } from '../types';
import { QueryResponse } from '../buildQuery';
export declare type GetResponseParser = (
  introspectionResults: IntrospectionResult
) => (
  aorFetchType: FetchType,
  resource?: IntrospectedResource
) => (res: { data: any }) => QueryResponse;
export declare const getResponseParser: GetResponseParser;
//# sourceMappingURL=index.d.ts.map
