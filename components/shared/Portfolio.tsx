
import Image from "next/image"
import { Title } from "./title"
import { Container } from "./container"

type Project = {
    user_id: number,
    name: string,
    description: string,
    created_at: string,
    updated_at: string,
    source_url: string,
    demo_url: string

}

type PortfolioData = {
    user_id: number
    fullname: string,
    contacts : string,
    about: string,
    avatar: string,
    project: Project[],
    created_at: string,
    updated_at: string
}

interface Props {
    data: PortfolioData
}

export const Portfolio: React.FC<Props> = ({data}) => {
    return (
        <Container>
            <div className="flex gap-7 items-center">
                <Image src={data.avatar} alt='Фото профиля' width={145} height={145} className="rounded-[100px]"></Image>
                <Title text={data.fullname} size='lg' className="flex flex-wrap max-w-[300px]"/>
            </div>
            <p>{data.about}</p>
            <p>{data.contacts}</p>
             <Image src='http://localhost:3000/telegram.svg' alt='Фото профиля' width={35} height={35} className="rounded-[100px]"></Image>
        </Container>
    )

}


