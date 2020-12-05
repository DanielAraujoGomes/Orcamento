using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("ContaContabilCalculo")]
    public class ContaContabilCalculo
    {

        public ContaContabilCalculo()
        {
            ContaContabil = new HashSet<ContaContabil>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        [Required]
        [MaxLength(3000,ErrorMessage = "O Campo Formula de Calculo não pode ultrapassar 3000 caracteres!")]
        public string FormuladeCalculo { get; set; }
        
        [Required]
        [MaxLength(600,ErrorMessage = "O Campo descrição não pode ultrapassar 15 caracteres!")]
        public string Descricao { get; set; }
        
        public virtual ICollection<ContaContabil> ContaContabil { get; set; }
    }
}