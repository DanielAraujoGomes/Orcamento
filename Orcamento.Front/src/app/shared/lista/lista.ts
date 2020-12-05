import { Filter } from 'src/app/shared/lista/filter';

export interface Lista {
   pagination: boolean;
   pagePrevious: number;
   pageNext: number;
   pageCount: number;
   pageNow: number;
   pageSize: number;
   regCount: number;
   pages: any[];
   select: string[];
   orderBy: string[];
   filters: Filter[];
   data: any[];
}
