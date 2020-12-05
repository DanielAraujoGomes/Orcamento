using System.Collections.Generic;

namespace OrcamentoApi.Command.Lista
{
    public class Config
    {
        public bool Pagination { get; set; } = false;
        public int PagePrevious { get; set; }
        public int PageNext { get; set; }
        public int PageCount { get; set; }
        public int PageNow { get; set; }
        public int PageSize { get; set; }
        public int RegCount { get; set; }

        public List<int> Pages { get; set; } = new List<int>();
        public List<string> Select { get; set; } = new List<string>();
        public List<string> OrderBy { get; set; } = new List<string>();
        public List<Filter> Filters { get; set; }
        public List<dynamic> Data { get; set; }
    }
    
}