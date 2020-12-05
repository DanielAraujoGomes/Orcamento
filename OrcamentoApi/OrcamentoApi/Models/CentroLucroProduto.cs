using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OrcamentoApi.Models
{
    [Table("CentroLucroProduto")]
    public class CentroLucroProduto
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        
        [ForeignKey("CentroLucro")]
        public long CentroLucroId { get; set; }
        
        [ForeignKey("Produto")]
        public long ProdutoId { get; set; }
        
        public virtual CentroLucro CentroLucro { get; set; }
        
        public virtual Produto Produto { get; set; }
    }
}