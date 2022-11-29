// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

// Coin Flip
static string CoinFlip()
{
    Random rand = new Random();
    if (rand.Next(2) == 0)
    {
        return "Heads";
    }
    else
    {
        return "Tails";
    }
}
Console.WriteLine($"The toss is {CoinFlip()}!");

// Dice Roll
static int DiceRoll(int sides)
{
    Random rand = new Random();
    return rand.Next(1, sides + 1);
}
Console.WriteLine($"You rolled a {DiceRoll(20)}!");

// Stat Roll
static List<int> StatRoll()
{
    List<int> Stats = new List<int>();
    for(int i = 0; i < 4; i++)
    {
        Stats.Add(DiceRoll(20));
    }
    return Stats;
}
foreach (var item in StatRoll())
{
    Console.WriteLine(item);
}

// Roll Until
static string RollUntil(int number)
{
    if(number < 1 || number > 6)
    {
        return "Invalid Number";
    }
    int count = 1;
    int result = DiceRoll(6);
    while(result != number)
    {
        result = DiceRoll(6);
        count++;
    }
    return $"Rolled a {number} after {count} tries!";
}
Console.WriteLine(RollUntil(6));