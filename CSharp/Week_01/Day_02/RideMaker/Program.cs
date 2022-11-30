// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

Vehicle car = new Vehicle("VW GTI", "Green");
Vehicle truck = new Vehicle("Ford Ranger", "Red");
Vehicle pos = new Vehicle("Toyota Corolla", "Silver");
Vehicle magic = new Vehicle("Bugatti", "Purple", 2, true, 300);

List<Vehicle> vehicles = new List<Vehicle>() {car, truck, pos, magic};

foreach (Vehicle item in vehicles)
{
    item.ShowInfo();
}

car.ShowInfo();
car.Travel(100);
car.ShowInfo();
