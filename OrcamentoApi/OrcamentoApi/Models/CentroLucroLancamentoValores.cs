using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroLancamentoValores")]
    public class CentroLucroLancamentoValores
    {
        public CentroLucroLancamentoValores()
        {
            CentroLucroLancamentoComissao = new HashSet<CentroLucroLancamentoComissao>();
            CentroLucroLancamentoCpv = new HashSet<CentroLucroLancamentoCpv>();
            CentroLucroLancamentoFaturamentoLiquido = new HashSet<CentroLucroLancamentoFaturamentoLiquido>();
            CentroLucroLancamentoFrete = new HashSet<CentroLucroLancamentoFrete>();
            CentroLucroLancamentoLucroBruto = new HashSet<CentroLucroLancamentoLucroBruto>();
            CentroLucroLancamentoPdd = new HashSet<CentroLucroLancamentoPdd>();
            CentroLucroLancamentoQuantidadeTonelada = new HashSet<CentroLucroLancamentoQuantidadeTonelada>();
            CentroLucroLancamentoReceitaBruta = new HashSet<CentroLucroLancamentoReceitaBruta>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        [ForeignKey("CentroLucroLancamento")]
        public long CentroLucroLancamentoId { get; set; }
        
        [ForeignKey("TipoLancamento")]
        public long TipoLancamentoId { get; set; }
        
        [ForeignKey("Produto")]
        public long ProdutoId { get; set; }
        
        public int Unidade { get; set; }
        public decimal PrecoFob { get; set; }
        public decimal VendaCifi { get; set; }
        public decimal FreteCifi { get; set; }
        public decimal DespesaExportacao { get; set; }
        public decimal Comissao { get; set; }
        public long PrazoDias { get; set; }
        public decimal Cpv { get; set; }
        public decimal MargemBruta { get; set; }
        public decimal Pdd { get; set; }
        public decimal Janeiro { get; set; }
        public decimal Fevereiro { get; set; }
        public decimal Marco { get; set; }
        public decimal Abril { get; set; }
        public decimal Maio { get; set; }
        public decimal Junho { get; set; }
        public decimal Julho { get; set; }
        public decimal Agosto { get; set; }
        public decimal Setembro { get; set; }
        public decimal Outubro { get; set; }
        public decimal Novembro { get; set; }
        public decimal Dezembro { get; set; }
        
        public virtual CentroLucroLancamento CentroLucroLancamento  { get; set; }
        
        public virtual TipoLancamento TipoLancamento  { get; set; }
        
        public virtual Produto Produto  { get; set; }
        
        public virtual ICollection<CentroLucroLancamentoComissao> CentroLucroLancamentoComissao { get; set; }
        public virtual ICollection<CentroLucroLancamentoCpv> CentroLucroLancamentoCpv { get; set; }
        public virtual ICollection<CentroLucroLancamentoFaturamentoLiquido> CentroLucroLancamentoFaturamentoLiquido { get; set; }
        public virtual ICollection<CentroLucroLancamentoFrete> CentroLucroLancamentoFrete { get; set; }
        public virtual ICollection<CentroLucroLancamentoLucroBruto> CentroLucroLancamentoLucroBruto { get; set; }
        public virtual ICollection<CentroLucroLancamentoPdd> CentroLucroLancamentoPdd { get; set; }
        public virtual ICollection<CentroLucroLancamentoQuantidadeTonelada> CentroLucroLancamentoQuantidadeTonelada { get; set; }
        public virtual ICollection<CentroLucroLancamentoReceitaBruta> CentroLucroLancamentoReceitaBruta { get; set; }
        
    }
}