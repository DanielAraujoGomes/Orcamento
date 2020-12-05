using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroLancamentoFluxo")]
    public class CentroLucroLancamentoFluxo
    {
        public CentroLucroLancamentoFluxo()
        {
            CentroLucroLancamentoFluxoAprovador = new HashSet<CentroLucroLancamentoFluxoAprovador>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Preenchedor { get; set; }
        
        public string PreenchedorEmail { get; set; }
        
        public virtual ICollection<CentroLucroLancamentoFluxoAprovador> CentroLucroLancamentoFluxoAprovador { get; set; }
    }
}