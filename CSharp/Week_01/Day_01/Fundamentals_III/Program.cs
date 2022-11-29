// // See https://aka.ms/new-console-template for more information
// // Console.WriteLine("Hello, World!");

// // 1. Iterate and print values
// List<string> newList = new List<string>() {"one", "two", "three"};
// static void PrintList(List<string> MyList)
// {
//     foreach (var item in MyList)
//     {
//         Console.WriteLine(item);
//     }
// }
// PrintList(newList);

// // 2. Print Sum
// List<int> NumList = new List<int>() {1, 2, 3, 4, 5};
// static void SumOfNumbers(List<int> IntList)
// {
//     int total = IntList.Sum();
//     Console.WriteLine(total);
// }
// SumOfNumbers(NumList);

// // 3. Find Max
// List<int> NumList = new List<int>() {1, 2, 3, 4, 5};
// static int FindMax(List<int> IntList)
// {
//     int max = IntList.Max();
//     return max;
// }
// Console.WriteLine(FindMax(NumList));

// // 4. Square the Values
// List<int> NumList = new List<int>() {1, 2, 3, 4, 5};
// static List<int> SquareValues(List<int> IntList)
// {
//     List<int> NewList = new List<int>();
//     for (int i = 0; i < IntList.Count; i++)
//     {
//         NewList.Add(IntList[i] * IntList[i]);
//     }
//     return NewList;
// }
// foreach (int item in SquareValues(NumList))
// {
//     Console.WriteLine(item);
// }

// // 5. Replace Negative Numbers with 0.
// int[] NumList = {1, -2, 3, -4, 5};
// static int[] NonNegatives(int[] IntArray)
// {
//     for (int i = 0; i < IntArray.Length; i++)
//     {
//         if (IntArray[i] < 0)
//         {
//             IntArray[i] = 0;
//         }
//     }
//     return IntArray;
// }
// foreach (int item in NonNegatives(NumList))
// {
//     Console.WriteLine(item);
// }

// // 6. Print Dictionary
// Dictionary<string,string> MyDict = new Dictionary<string,string>() {{"one","two"},{"three","four"}};
// static void PrintDictionary(Dictionary<string,string> MyDictionary)
// {
//     foreach (var item in MyDictionary)
//     {
//         Console.WriteLine(item);
//     }
// }
// PrintDictionary(MyDict);

// // 7. Find Key
// Dictionary<string,string> MyDict = new Dictionary<string,string>() {{"one","two"},{"three","four"}};
// static bool FindKey(Dictionary<string,string> MyDictionary, string SearchTerm)
// {
//     bool key = MyDictionary.ContainsKey(SearchTerm);
//     return key;
// }
// Console.WriteLine(FindKey(MyDict, "four"));

// // 8. Generate a Dictionary
List<string> Names = new List<string>() { "Cliff", "Nick", "Luke", "Eric", "Tom" };
List<int> Nums = new List<int>() { 1, 2, 3, 4, 5 };

static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> NewDict = new Dictionary<string, int>();
    for(int i = 0; i<Names.Count; i++)
    {
        NewDict.Add(Names[i], Numbers[i]);
    }
    return NewDict;
}
foreach (var item in GenerateDictionary(Names, Nums))
{
    Console.WriteLine(item);
}
