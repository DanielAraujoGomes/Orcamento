using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace OrcamentoApi.Models
{
    [Table("CentroLucro")]
    public class CentroLucro
    {
        public CentroLucro()
        {
            CentroLucroLancamento = new HashSet<CentroLucroLancamento>();
            CentroLucroProduto = new HashSet<CentroLucroProduto>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(11,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Codigo { get; set; }
        
        [Required]
        [MaxLength(2000,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Descricao { get; set; }
 
        [ForeignKey("Diretoria")]
        public int DiretoriaId { get; set; }

        [ForeignKey("Empresa")]
        public int EmpresaId { get; set; }
        
        [ForeignKey("Filial")]
        public int FilialId { get; set; }
        
        [ForeignKey("Classe")]
        public int ClasseId { get; set; }
        
        [ForeignKey("Categoria")]
        public int CategoriaId { get; set; }

        public virtual Diretoria Diretoria { get; set; }

        public virtual Empresa Empresa { get; set; }

        public virtual Filial Filial { get; set; }

        public virtual Classe Classe { get; set; }

        public virtual Categoria Categoria { get; set; }
        
        public virtual ICollection<CentroLucroLancamento> CentroLucroLancamento { get; set; }
        
        public virtual ICollection<CentroLucroProduto> CentroLucroProduto { get; set; }
    }
}