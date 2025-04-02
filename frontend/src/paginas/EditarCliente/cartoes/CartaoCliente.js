import { Button, Card, CardActions, CardContent, CardHeader, Stack, Typography } from "@mui/material";

export default function CartaoCliente(
    { cliente, abrirModal, removerCliente }
) {

    return (
        <Card>
            <CardHeader title={cliente.nome} />
            <CardContent>
                <Stack direction={"column"} textAlign={"initial"} marginLeft={8}>
                    <Typography variant="p">CPF: {cliente.cpf}</Typography>
                    <Typography variant="p">
                        Data de Nascimento: {
                            cliente.dataNascimento !== null && cliente.dataNascimento.trim() !== "" ? cliente.dataNascimento : "N/A"
                        }
                    </Typography>
                    <Typography variant="p">
                        Endereço: {
                            cliente.endereco !== null && cliente.endereco.trim() !== "" ? cliente.endereco : "N/A"
                        }
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button onClick={abrirModal}>Editar cliente</Button>
                <Button onClick={() => removerCliente(cliente.id)}>Remover cliente</Button>
            </CardActions>
        </Card>
    )
}