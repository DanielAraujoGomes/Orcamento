using Microsoft.EntityFrameworkCore;
using OrcamentoApi.Models;

namespace OrcamentoApi.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }
        public DbSet<Categoria> Categoria { get; set; }
        
        public DbSet<CentroLucro> CentroLucro { get; set; }
       
        public DbSet<CentroLucroLancamento> CentroLucroLancamento { get; set; }
       
        public DbSet<CentroLucroLancamentoComissao> CentroLucroLancamentoComissao { get; set; }
       
        public DbSet<CentroLucroLancamentoCpv> CentroLucroLancamentoCpv { get; set; }
       
        public DbSet<CentroLucroLancamentoFaturamentoLiquido> CentroLucroLancamentoFaturamentoLiquido { get; set; }
       
        public DbSet<CentroLucroLancamentoFluxo> CentroLucroLancamentoFluxo { get; set; }
       
        public DbSet<CentroLucroLancamentoFluxoAprovador> CentroLucroLancamentoFluxoAprovador { get; set; }
        
        public DbSet<CentroLucroLancamentoFrete> CentroLucroLancamentoFrete { get; set; }
       
        public DbSet<CentroLucroLancamentoLucroBruto> CentroLucroLancamentoLucroBruto { get; set; }
       
        public DbSet<CentroLucroLancamentoMargemEsperada> CentroLucroLancamentoMargemEsperada { get; set; }
       
        public DbSet<CentroLucroLancamentoPdd> CentroLucroLancamentoPdd { get; set; }
       
        public DbSet<CentroLucroLancamentoQuantidadeTonelada> CentroLucroLancamentoQuantidadeTonelada { get; set; }
       
        public DbSet<CentroLucroLancamentoReceitaBruta> CentroLucroLancamentoReceitaBruta { get; set; }
       
        public DbSet<CentroLucroLancamentoValores> CentroLucroLancamentoValores { get; set; }
        
        public DbSet<CentroLucroProduto> CentroLucroProduto { get; set; }
        public DbSet<Classe> Classe { get; set; }
        public DbSet<ContaContabil> ContaContabil { get; set; }
        public DbSet<ContaContabilCalculo> ContaContabilCalculo { get; set; }
        public DbSet<ContaContabilClassificacao> ContaContabilClassificacao { get; set; }
        public DbSet<Diretoria> Diretoria { get; set; }
        public DbSet<Empresa> Empresa { get; set; }
        
        public DbSet<Exercicio> Exercicio { get; set; }
        public DbSet<Filial> Filial { get; set; }
        
        public DbSet<Produto> Produto { get; set; }
        
        public DbSet<ProdutoGrupo> ProdutoGrupo { get; set; }
        public DbSet<ProdutoLinha> ProdutoLinha { get; set; }
        public DbSet<ProdutoMercado> ProdutoMercado { get; set; }
        public DbSet<TipoLancamento> TipoLancamento { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //base.OnModelCreating(modelBuilder);
            modelBuilder.HasDefaultSchema("dbo_api");
        }
    }
}