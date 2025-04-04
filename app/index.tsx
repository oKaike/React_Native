import CustomButton from "@/components/CustomButton";
import React,{ useState }  from "react"; 
import { Button, Text,View } from "react-native";

export default function HomeScreen(){

    const[count, setCount] = useState(1);
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
            <CustomButton title="Teste"/>
        </View>
      
    );

}
