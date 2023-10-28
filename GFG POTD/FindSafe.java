import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

class FindSafe {

    List<Integer> eventualSafeNodes(int V, List<List<Integer>> adj) {
        List<List<Integer>> rev=new ArrayList<>();
        for(int i=0;i<V;i++){
            rev.add(new ArrayList<>());
        }
        for(int i=0;i<V;i++){
            List<Integer> temp=adj.get(i);
            for(int j=0;j<temp.size();j++){
                rev.get(temp.get(j)).add(i);
            }
        }
        List<Integer> ans=topoSort(V,rev);
        return ans;
    }
    static List<Integer> topoSort(int V, List<List<Integer>> adj) 
    {
        // add your code here
        List<Integer> ans=new ArrayList<>();
        int ind=0;
        int indegree[]=new int[V];//determines number of incoming edges for each node
        Arrays.fill(indegree,0);
        for(int i=0;i<V;i++){
            List<Integer> temp=adj.get(i);
            for(Integer x:temp){
                indegree[x]+=1;
            }
        }
        Queue<Integer> q=new LinkedList<>();//declare a queue
        for(int i=0;i<V;i++){
            if(indegree[i]==0)
            q.add(i);
        }
        while(!q.isEmpty()){
            int x=q.poll();
            ans.add(x);
            List<Integer> temp=adj.get(x);
            for(Integer y:temp){
                indegree[y]-=1;
                if(indegree[y]==0){
                    q.add(y);
                }
            }
        }
        Collections.sort(ans);
        return ans;
    }
}
