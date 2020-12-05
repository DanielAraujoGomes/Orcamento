using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("Produto")]
    public class Produto
    {
        public Produto()
        {
            CentroLucroLancamentoValores = new HashSet<CentroLucroLancamentoValores>();
            CentroLucroProduto = new HashSet<CentroLucroProduto>();
        }
        
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        [Required]
        [MaxLength(50,ErrorMessage = "O Campo Código não pode ultrapassar 50 caracteres!")]
        public string Codigo { get; set; }
        
        [Required]
        [MaxLength(2000,ErrorMessage = "O Campo Descrição não pode ultrapassar 2000 caracteres!")]
        public string Descricao { get; set; }
        
        public decimal Custo { get; set; }

        [ForeignKey("Filial")]
        public long FilialId { get; set; }
        
        [ForeignKey("ProdutoMercado")]
        public long ProdutoMercadolId { get; set; }
        
        [ForeignKey("ProdutoLinha")]
        public long ProdutoLinhaId { get; set; }
        
        [ForeignKey("ProdutoGrupo")]
        public long ProdutoGrupoId { get; set; }
        
        public virtual Filial Filial { get; set; }

        public virtual ProdutoMercado ProdutoMercado { get; set; }
        
        public virtual ProdutoLinha ProdutoLinha { get; set; }

        public virtual ProdutoGrupo ProdutoGrupo { get; set; }
        
        public virtual ICollection<CentroLucroLancamentoValores> CentroLucroLancamentoValores { get; set; }
        
        public virtual ICollection<CentroLucroProduto> CentroLucroProduto { get; set; }
    }
}