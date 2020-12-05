using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroLancamentoFluxoAprovador")]
    public class CentroLucroLancamentoFluxoAprovador
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [ForeignKey("CentroLucroLancamentoFluxo")]
        public long CentroLucroFluxoId { get; set; }
        
        public string Aprovador { get; set; }
        
        public string AprovadorEmail { get; set; }
        
        public long Ordem { get; set; }
        
        public virtual CentroLucroLancamentoFluxo CentroLucroLancamentoFluxo { get; set; }
    }
}