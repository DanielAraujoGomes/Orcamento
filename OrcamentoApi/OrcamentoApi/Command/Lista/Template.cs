using System.Collections.Generic;
using System.Linq;
using System.Linq.Dynamic.Core;

namespace OrcamentoApi.Command.Lista
{
    public static class Template
    {
        public static Config Catalog<T>(this IQueryable<T> list, Config config = null) where T : class
        {
            config ??= new Config();

            var (query, param) = config.Filters.Conditional();

            var where = param.Any() ? list.AsQueryable().Where(query, param) : list.AsQueryable();

            var select = config.Select.Any() ? where.AsQueryable().Select($"new ( {string.Join(',', config.Select)} )") : where.AsQueryable();

            select = config.OrderBy.Any() ? select.OrderBy($"{string.Join(',', config.OrderBy)}") : select;

            #region obtento quantidade de registros

            config.RegCount = select.Count();

            #endregion

            #region calulo PageCount

            if (config.PageSize == 0) config.PageSize = 10;

            config.PageCount = config.RegCount / config.PageSize;

            if (config.RegCount % config.PageSize > 0) config.PageCount++;

            #endregion

            #region Verificando a Pagina Atual

            config.PageNow = config.PageNow <= 0 ? 1 : config.PageNow;

            if (config.PageNow > config.PageCount) config.PageNow = config.PageCount;

            #endregion

            #region Calculando Ponto de Leitura 

            var count = (config.PageNow - 1) * config.PageSize;

            if (count < 0) count = 0;

            #endregion

            #region Verificando se é pra paginar ou não

            var data = config.Pagination ? select.Skip(count: count).Take(config.PageSize) : select;

            #endregion

            #region Configurando Pagina Anterior

            config.PagePrevious = config.PageNow - 1 <= 0 ? 1 : config.PageNow - 1;

            #endregion

            #region Configurando Próxima Pagina

            config.PageNext = config.PageNow + 1 > config.PageCount ? config.PageCount : config.PageNow + 1;

            #endregion

            config.Pages = new List<int>();

            if (config.PageCount >= 2 && config.Pagination)
            {
                for (var pageAnt = config.PageNow - 2; pageAnt <= config.PageNow - 1; pageAnt++)
                    if (pageAnt >= 1) config.Pages.Add(pageAnt);

                config.Pages.Add(config.PageNow);

                for (var pageDep = config.PageNow + 1; pageDep <= config.PageNow + 2; pageDep++)
                    if (pageDep <= config.PageCount) config.Pages.Add(pageDep);
            }


            config.Data = data.ToDynamicList();

            return config;
        }
        
    }
}