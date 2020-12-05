using System.Collections.Generic;
using System.Linq;

namespace OrcamentoApi.Command.Lista
{
    public static class Where
    {
        public static (string query, object[] param) Conditional(this List<Filter> filtros)
        {
            var query = "";
            var param = new List<object>();

            var or = new List<Filter>();
            var and = new List<Filter>();
            
            if (filtros == null || !filtros.Any()) return (query, param.ToArray());
            
            foreach (var filtro in filtros)
            {
                if (string.IsNullOrEmpty(filtro.Condicional)) filtro.Condicional = "and";

                if (filtro.Condicional == "and")
                    and.Add(filtro);
                else
                    or.Add(filtro);
            }

            if (and.Count >= 1 && or.Count >= 1)
            {
                string queryOr = null;
                string queryAnd = null;
                    
                foreach (var filtroOr in or)
                {
                    if (!string.IsNullOrEmpty(queryOr)) queryOr += $" {filtroOr.Condicional} ";

                    param.Add(filtroOr.Value.ToLower());

                    queryOr += $"{filtroOr.Name}.ToString().ToLower().Contains(@{param.Count - 1})";
                }
                    
                    
                foreach (var filtroAnd in and)
                {
                    if (!string.IsNullOrEmpty(queryAnd)) queryAnd += $" {filtroAnd.Condicional} ";

                    param.Add(filtroAnd.Value.ToLower());

                    queryAnd += $"{filtroAnd.Name}.ToString().ToLower().Contains(@{param.Count - 1})";
                }
                    
                    
                var query2 = $"( {queryOr} ) and ( {queryAnd} )";
                    
                return (query2, param.ToArray());
            }
                
                
                
            foreach (var filtro in filtros)
            {
                if (!string.IsNullOrEmpty(query)) query += $" {filtro.Condicional} ";

                param.Add(filtro.Value.ToLower());

                query += $"{filtro.Name}.ToString().ToLower().Contains(@{param.Count - 1})";
            }

            return (query, param.ToArray());
        }
    }
}