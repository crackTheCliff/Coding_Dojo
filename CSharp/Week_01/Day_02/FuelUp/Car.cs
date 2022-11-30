class Car : Vehicle, INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Car (string name, string color, int passengers, bool hasEngine, int topSpeed, string fuelType) : base (name, color, passengers, hasEngine, topSpeed)
    {
        FuelType = fuelType;
        FuelTotal = 10;
    }
    public void GiveFuel(int Amount)
    {
        FuelTotal += Amount;
        Console.WriteLine($"You filled up your {_Name}. You have {FuelTotal} gallons remaining.");
    }
        public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Fuel Type: {FuelType}\nFuel Total: {FuelTotal}");
    }

}