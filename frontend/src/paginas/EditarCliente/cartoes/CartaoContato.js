import { Button, Card, CardActions, CardContent, Stack, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartaoContato(
    { contato, abrirModal, removerContato }
) {
    return (
        <Card>
            <CardContent>
                <Stack direction={"column"} spacing={2} textAlign={"initial"} marginLeft={8}>
                    <Typography variant="p">{contato.tipoContato}: {contato.valor}</Typography>
                    <Typography variant="p">
                        Obs.: {
                            contato.observacao !== null && contato.observacao.trim() !== "" ? contato.observacao : "N/A"
                        }
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions>
                <Button onClick={() => abrirModal(contato)}>
                    <EditIcon/>Editar
                </Button>
                <Button onClick={() => removerContato(contato)}>
                    <DeleteIcon/>Remover
                </Button>
            </CardActions>
        </Card>
    )
    
}