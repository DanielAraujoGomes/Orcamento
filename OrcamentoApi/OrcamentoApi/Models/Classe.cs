using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Policy;

namespace OrcamentoApi.Models
{
    [Table("Classe")]
    public class Classe
    {
        public Classe()
        {
            CentroLucro = new HashSet<CentroLucro>();    
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(2000,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Descricao { get; set; }
        
        public virtual ICollection<CentroLucro> CentroLucro { get; set; }
    }
}