import CustomButton from "@/components/CustomButton";
import Example from "@/components/Example";
import React,{ useState }  from "react"; 
import { Button, Text,View, } from "react-native";
import Form from "@/components/Form";

export default function HomeScreen(){

    const[count, setCount] = useState(1);
    const[name, setName] = useState("Brunão");
return (
        //View tem a mesma funcionalidade de uma DIV
        <View style={{backgroundColor: 'red'}}>
            
            <Text>{count}</Text>
            <Button 
            title="Aumentar" 
            onPress={() => {setCount(count+1)}}/>
                  <Button 
            title="Diminuir" 
            onPress={() => {setCount(count-1)}}/>
            <Button 
            title="Reiniciar" 
            onPress={() => {setCount(count - count)}}/>
            
            <Example example="Texto teste"/>
            
           <Form/>
           
        </View>
        );
}

