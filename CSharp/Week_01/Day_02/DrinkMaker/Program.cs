// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

Soda softDrink = new Soda("Crush", "Red", 50, 350, true);

Coffee java = new Coffee("Columbian", "Black", 142, 50, false, "Medium Dark", "Ground");

Wine grapes = new Wine("Cabernet", "Red", 70, 100, false, "Nappa", "1930");

// Coffee MyDrink = new Soda("Crush", "Red", 50, 350, true);
//error CS0029: Cannot implicitly convert type 'Soda' to 'Coffee'

List<Drink> AllBeverages = new List<Drink>() {softDrink, java, grapes};

foreach (Drink item in AllBeverages)
{
    item.ShowDrink();
}

// Console.WriteLine(softDrink.Name);
// Console.WriteLine(java.Name);
// Console.WriteLine(grapes.Name);