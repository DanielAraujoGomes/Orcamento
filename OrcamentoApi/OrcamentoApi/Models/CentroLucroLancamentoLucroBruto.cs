using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroLancamentoLucroBruto")]
    public class CentroLucroLancamentoLucroBruto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        [ForeignKey("CentroLucroLancamentoValores")]
        public long CentroLucroLancamentoValoresId { get; set; }
        
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
        public decimal Total { get; set; }
        
        public virtual CentroLucroLancamentoValores CentroLucroLancamentoValores  { get; set; }
    }
}