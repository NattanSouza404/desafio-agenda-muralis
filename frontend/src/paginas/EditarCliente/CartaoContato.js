import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";

export default function CartaoContato(props) {
    
    const contato = props.contato;
    const abrirModalEditarContato = props.abrirModalEditarContato;
    const removerContato = props.removerContato;
    
    return (
        <Card>
            <CardContent>
                <Stack direction={"column"} spacing={2} textAlign={"initial"} marginLeft={8}>
                    <Typography variant="p">{contato.tipoContato}: {contato.valor}</Typography>
                    <Typography variant="p">Obs.: {contato.observacao}</Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button onClick={() => abrirModalEditarContato(contato)}>Editar contato</Button>
                <Button onClick={() => removerContato(contato)}>Remover contato</Button>
            </CardActions>
        </Card>
    )
    
}