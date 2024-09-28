import Image from "next/image"
import Button from "./Button"

export default function Body () {
    return (
        <div>
          <div class="initialrod">
            <Image 
                src="/imgs/logo.png"
                width={200}
                height={100}
                className="border rounded-2xl mb-8"
            />
            <Button label="Nossos produtos" href="/produtos/" className="botao"/>
            <Button label="Curso de confeitaria básica" href="/curso/" className= "botao" />
            </div>
            

        
        </div>
    )
}