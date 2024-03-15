import './header.scss'
export function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <h1>Hi, i'm Lucas!👋</h1>
                    <h2>Front end Developer</h2>
                </div>
                <img src="../public/lucasquadrado.jpg" alt="Lucas img" width={325}
                    height={277} />
            </div>
        </>
    )
}