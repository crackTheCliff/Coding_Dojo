class Coffee : Drink
{
    public string Roast;
    public string Beans;

    public Coffee(string name, string color, double temp, int calories, bool isCarb, string roast, string beans) : base(name, color, temp, isCarb, calories)
    {
        Roast = roast;
        Beans = beans;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine(Roast);
        Console.WriteLine(Beans);
    }
}
