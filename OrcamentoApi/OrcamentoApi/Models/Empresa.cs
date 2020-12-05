using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("Empresa")]
    public class Empresa
    {
        public Empresa()
        {
            Filial = new HashSet<Filial>();
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

        public virtual ICollection<Filial> Filial { get; set; }
        
        public virtual ICollection<CentroLucro> CentroLucro { get; set; }
    }
}