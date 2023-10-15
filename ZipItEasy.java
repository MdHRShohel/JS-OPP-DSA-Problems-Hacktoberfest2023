import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
import java.util.Scanner;
public class ZipItEasy {
	public static void main(String[] args) { 
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the location of zip file(remove quotation marks from the address):");
        String EndZipFile = sc.next();
        System.out.println("Enter the number of files to zip");
        int n=sc.nextInt();
        String[] filesToBeZipped = new String[n];
        for(int i=0;i<n;i++) {
        	System.out.println("Enter the location of file(remove quotation marks from the address):");
            filesToBeZipped[i] = sc.next();
        }
        try {
            FileOutputStream fos = new FileOutputStream(EndZipFile);
            ZipOutputStream zos = new ZipOutputStream(fos);
            
            for (int i=0; i < filesToBeZipped.length; i++) {
                File source = new File(filesToBeZipped[i]);
                FileInputStream fis = new FileInputStream(source);
                zos.putNextEntry(new ZipEntry(source.getName())); 
                int length;
                byte[] buffer = new byte[1024];
                while ((length = fis.read(buffer)) > 0) {
                    zos.write(buffer, 0, length);
                }
                zos.closeEntry();
                fis.close();   
            }
            zos.close();
            System.out.println("The file is written successfully");
        }
        catch (IOException ioe) {
            System.out.println("Error in zipping files: "+ ioe);
        }
    } 
}