using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace OrcamentoApi.Models
{
    [Table("Filial")]
    public class Filial
    {
        public Filial()
        {
            CentroLucro = new HashSet<CentroLucro>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(10,ErrorMessage = "O Campo Código não pode ultrapassar 10 caracteres!")]
        public string Codigo { get; set; }
        
        [Required]
        [MaxLength(2000,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Descricao { get; set; }
        
        [ForeignKey("Empresa")]
        public long EmpresaId { get; set; }
        
        public virtual Empresa Empresa { get; set; }
        public virtual ICollection<CentroLucro> CentroLucro { get; set; }
    }
}