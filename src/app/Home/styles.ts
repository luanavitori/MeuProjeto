import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1874CD",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginVertical: 20,
    marginTop: 35,
  },
  input: {
    height: 50,
    borderColor: "#0000CD",
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
    marginBottom: 15,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  infoContainer: {
    flex: 2,
  },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#black",
  },
  produtor: {
    color: "#black",
    fontSize: 13,
  },
  quantidadeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  quantidade: {
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#black",
  },
  precoContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  preco: {
    fontWeight: "bold",
    color: "#32CD32",
  },
  resumo: {
    borderTopWidth: 2,
    borderTopColor: "#fff",
    marginTop: 15,
    paddingTop: 10,
  },
  linhaResumo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  textoResumo: {
    color: "#E0FFFF",
  },
  totalLabel: {
    fontWeight: "bold",
    color: "#fff",
  },
  totalValor: {
    fontWeight: "bold",
    color: "#32CD32",
  },
});



