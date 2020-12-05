using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("ContaContabil")]
    public class ContaContabil
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id {get; set;}
        
        [Required]
        [MaxLength(15,ErrorMessage = "O Campo código não pode ultrapassar 15 caracteres!")]
        public string Codigo {get; set;}
        
        [Required]
        [MaxLength(3000,ErrorMessage = "O Campo código não pode ultrapassar 3000 caracteres!")]
        public string Descricao {get; set;}
        
        [ForeignKey("ContaContabilCalculo")]
        public long? ContaContabilCalculoId { get; set; }

        [Required]
        [ForeignKey("ContaContabilClassificacao")]
        public long ContaContabilClassificacaoId { get; set; }

        [MaxLength(3000,ErrorMessage = "O Campo ajuda não pode ultrapassar 3000 caracteres!")]
        public string Ajuda { get; set; }

        public long Ordenacao { get; set; }
        
        public virtual ContaContabilCalculo ContaContabilCalculo { get; set; }
        
        public virtual ContaContabilClassificacao ContaContabilClassificacao { get; set; }
    }
}