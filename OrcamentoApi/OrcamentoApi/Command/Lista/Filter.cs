namespace OrcamentoApi.Command.Lista
{
    public abstract class Filter
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public string Condicional { get; set; }
    }
}