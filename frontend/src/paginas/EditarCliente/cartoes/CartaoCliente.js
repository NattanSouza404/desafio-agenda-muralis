import { Button, Card, CardActions, CardContent, CardHeader, Stack, Typography } from "@mui/material";

export default function CartaoCliente(
    {cliente, abrirModalEditarCliente, removerCliente}
) {
    
    return (
        <Card>
            <CardHeader title={cliente.nome} />
            <CardContent>
                <Stack direction={"column"} textAlign={"initial"} marginLeft={8}>
                    <Typography variant="p">CPF: {cliente.cpf}</Typography>
                    <Typography variant="p">Data de Nascimento: {cliente.dataNascimento}</Typography>
                    <Typography variant="p">Endereço: {cliente.endereco}</Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button onClick={() => abrirModalEditarCliente()}>Editar cliente</Button>
                <Button onClick={() => removerCliente(cliente.id)}>Remover cliente</Button>
            </CardActions>
        </Card>
    )
}