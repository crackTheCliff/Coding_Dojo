// See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!");

Enemy orc = new Enemy("Orc");

Attack slash = new Attack("Slash", 10);
Attack cut = new Attack("Cut", 5);
Attack fireBall = new Attack("Fireball", 10);

orc.addAttack(slash).addAttack(cut).addAttack(fireBall);
foreach (Attack item in orc.Attacks)
{
    Console.WriteLine($"Attack: {item._Name} Damage: {item._Damage}");
}
orc.RandomAttack();