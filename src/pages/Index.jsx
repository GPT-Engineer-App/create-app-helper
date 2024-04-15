import React, { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Divider, Spacer, Container } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.sm" py={8}>
      <Box bg="gray.100" p={6} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Todo App
        </Heading>
        <VStack spacing={4} align="stretch">
          <HStack>
            <Input value={inputValue} onChange={handleInputChange} placeholder="Enter a todo" />
            <IconButton icon={<FaPlus />} onClick={handleAddTodo} aria-label="Add todo" />
          </HStack>
          <Divider />
          {todos.map((todo, index) => (
            <HStack key={index}>
              <Text>{todo}</Text>
              <Spacer />
              <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} aria-label="Remove todo" />
            </HStack>
          ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
