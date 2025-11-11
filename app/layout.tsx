import '../styles/globals.css'
import MainContainer from './components/MainContainer';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode;}>) 
{
  return (
    <html lang="pt-br">
      <body>
         <MainContainer>
          {children}
          </MainContainer>
      </body>
    </html>
  );
}
