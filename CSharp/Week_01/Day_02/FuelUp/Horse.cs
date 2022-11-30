class Horse : Vehicle, INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Horse (string name, string color, int passengers, int topSpeed, string fuelType) : base (name, color, passengers, false, topSpeed)
    {
        FuelType = fuelType;
        FuelTotal = 10;
    }
        public void GiveFuel(int Amount)
    {
        FuelTotal += Amount;
        Console.WriteLine($"You fed {_Name}. Your horse ate {FuelTotal} much hay.");
    }
        public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Fuel Type: {FuelType}\nFuel Total: {FuelTotal}");
    }
}