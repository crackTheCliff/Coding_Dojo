class Wine : Drink
{
    public string Region;
    public string Year;

    public Wine(string name, string color, double temp, int calories, bool isCarb, string region, string year) : base(name, color, temp, isCarb, calories)
    {
        Region = region;
        Year = year;
    }
    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine(Region);
        Console.WriteLine(Year);
    }
}
