using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("ContaContabilClassificacao")]
    public class ContaContabilClassificacao
    {
        public ContaContabilClassificacao()
        {
            ContaContabil = new HashSet<ContaContabil>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        [Required]
        [MaxLength(2000,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Descricao { get; set; }
        
        public virtual ICollection<ContaContabil> ContaContabil { get; set; }
    }
}