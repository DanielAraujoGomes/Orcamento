using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroLancamento")]
    public class CentroLucroLancamento
    {

        public CentroLucroLancamento()
        {
            CentroLucroLancamentoValores = new HashSet<CentroLucroLancamentoValores>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [ForeignKey("CentroLucro")]
        public long CentroLucroId { get; set; }

        [ForeignKey("Exercicio")]
        public long ExercicioId { get; set; }
        
        public decimal Imposto { get; set; }

        public decimal Pdd { get; set; }

        [ForeignKey("CentroLucroLancamentoFluxo")]
        public long CentroLucroFluxoId { get; set; }
        
        public virtual Exercicio Exercicio { get; set; }

        public virtual CentroLucro CentroLucro { get; set; }
        
        public virtual CentroLucroLancamentoFluxo CentroLucroLancamentoFluxo { get; set; }
        public virtual ICollection<CentroLucroLancamentoValores> CentroLucroLancamentoValores { get; set; }
    }
}