// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

Car stang = new Car("Mustang","blue",2,true,200,"premium");
Horse sie = new Horse("Ed", "brown", 2, 35, "Hay");
Bicycle trike = new Bicycle("Diamondback", "black", 1, false, 25);

List<Vehicle> vList = new List<Vehicle>(){stang, sie, trike};
List<INeedFuel> fuelList = new List<INeedFuel>();
foreach (Vehicle item in vList)
{
    if (item is INeedFuel){
        fuelList.Add(item as INeedFuel);
    }
}
// Console.WriteLine(string.Join(',', fuelList));
foreach (INeedFuel item in fuelList)
{
    item.GiveFuel(10);
}

// stang.ShowInfo();
// sie.ShowInfo();
// sie.GiveFuel(20);
// sie.ShowInfo();