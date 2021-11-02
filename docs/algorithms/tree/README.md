#ListView

class Fruit


	import java.io.Serializable
	
	public class Fruit(val name:String,val imageId:Int):Serializable {
	
	}


FruitAdapter
	
	import android.app.Activity
	import android.view.LayoutInflater
	import android.view.View
	import android.view.ViewGroup
	import android.widget.ArrayAdapter
	import android.widget.ImageView
	import android.widget.TextView
	
	class FruitAdapter (activity: Activity, val  resourceId: Int, data:List<Fruit>):ArrayAdapter<Fruit>(activity,resourceId,data){
	    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
	        val view: View
	        if(convertView==null){
	
	            view=LayoutInflater[1].from(context).inflate(resourceId,parent,false);
	        }
	        else{
	            view=convertView
	        }
	
	        val fruitImage: ImageView =view.findViewById(R.id.furit_image)
	        val fruitName: TextView=view.findViewById(R.id.furit_name);
	        val fruit=getItem(position);
	        if(fruit!=null){
	            fruitImage.setImageResource(fruit.imageId);
	            fruitName.text=fruit.name
	        }
	        return view
	    }
	}

mainActivity


	import android.content.Intent
	import androidx.appcompat.app.AppCompatActivity
	import android.os.Bundle
	import android.widget.ArrayAdapter
	import android.widget.Toast
	import kotlinx.android.synthetic.main.activity_main.*
	
	class MainActivity : AppCompatActivity() {
	    private val fruitList= ArrayList<Fruit>()
	
	    override fun onCreate(savedInstanceState: Bundle?) {
	        super.onCreate(savedInstanceState)
	        setContentView(R.layout.activity_main)
	        initFruits();
	        val adapter=FruitAdapter(this,R.layout.fruit_item,fruitList);
	        list_view.adapter=adapter
	        list_view.setOnItemClickListener { _, _, position, _ ->
	            val fruit=fruitList[position]
	            Toast.makeText(this,fruit.name,Toast.LENGTH_SHORT).show()
	        }
	
	    }
	    private fun initFruits(){
	        repeat(2){
	            fruitList.add(Fruit("Apple",R.drawable.ic_launcher_background))
	            fruitList.add(Fruit("banan",R.drawable.ic_launcher_background))
	            fruitList.add(Fruit("Awee",R.drawable.ic_launcher_background))
	            fruitList.add(Fruit("Appwle",R.drawable.ic_launcher_background))
	            fruitList.add(Fruit("Applwee",R.drawable.ic_launcher_background))
	
	        }
	    }
	
	    
	}


activity_main

	<?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    xmlns:app="http://schemas.android.com/apk/res-auto"
	    xmlns:tools="http://schemas.android.com/tools"
	    android:layout_width="match_parent"
	    android:layout_height="match_parent"
	    android:orientation="vertical"
	    android:background="@drawable/sea"
	    tools:context=".MainActivity">
	
	    <ListView
	        android:id="@+id/list_view"
	        android:layout_width="match_parent"
	        android:layout_height="match_parent" />
	
	</LinearLayout>

fruit_item
	
	
	<?xml version="1.0" encoding="utf-8"?>
	<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
	    xmlns:tools="http://schemas.android.com/tools"
	    android:layout_width="match_parent"
	    android:layout_height="wrap_content"
	    android:orientation="horizontal"
	    tools:context=".MainActivity">
	
	    <ImageView
	        android:id="@+id/furit_image"
	        android:layout_width="match_parent"
	        android:layout_height="match_parent" />
	    <TextView
	        android:id="@+id/furit_name"
	        android:layout_width="match_parent"
	        android:layout_height="match_parent"
	        android:layout_gravity="center_vertical"
	        android:layout_marginLeft="10dp"
	        >
	    </TextView>
	</LinearLayout>


