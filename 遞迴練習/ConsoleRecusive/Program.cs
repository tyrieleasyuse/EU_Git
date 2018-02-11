using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleRecusive
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("輸入路徑：");
            string target_path = Console.ReadLine();
            SearchDirectoryFileName(target_path);
            Console.ReadKey();
        }

        private static void SearchDirectoryFileName(string target_path)
        {
            string[] subDirectory = System.IO.Directory.GetDirectories(target_path);
            if (subDirectory.Length == 0)
            {
                ShowFolderAndFileName(target_path);
            }
            else
            {
                ShowFolderAndFileName(target_path);

                foreach (string sub_dir in subDirectory)
                {
                    SearchDirectoryFileName(sub_dir);
                }
            }
        }

        private static void ShowFolderAndFileName(string target_path)
        {
            Console.WriteLine($"資料夾：{target_path}");
            string[] FilesName = System.IO.Directory.GetFiles(target_path);
            foreach (string file_name in FilesName)
            {
                Console.WriteLine($"　檔案：{file_name}");
            }
            Console.WriteLine("");
        }
    }
}
